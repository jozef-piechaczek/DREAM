import pytest

from scenarios.create_account import fill_in_common_fields, submit_form, open_registration_form, \
    fill_in_farmer_specific_fields, select_role
from helpers.general import SUCCESS
from helpers.seed_db import seed_farmer, seed_policy_maker
from models.Farmer import Farmer
from models.PolicyMaker import PolicyMaker
from scenarios.log_in import FARM_ALREADY_CREATED, email_already_in_use_message
import test_delete_account as tda


@pytest.fixture(scope='function')
def delete_farmer_account(driver):
    yield
    tda.test_delete_account_farmer(driver, Farmer())


@pytest.fixture(scope='function')
def delete_policy_maker_account(driver):
    yield
    tda.test_delete_account_policy_maker(driver, PolicyMaker())


@pytest.mark.usefixtures('delete_policy_maker_account')
def test_create_policy_maker_account(driver, p_policy_maker=None, assertion=SUCCESS):
    policy_maker = PolicyMaker() if p_policy_maker is None else p_policy_maker

    open_registration_form(driver)
    fill_in_common_fields(driver, policy_maker)

    select_role(driver, policy_maker.role)

    notification = submit_form(driver)
    assert notification.text == assertion


def test_create_two_policy_makers_with_the_same_data_with_error(driver):
    assertion = email_already_in_use_message(seed_policy_maker.email)
    test_create_policy_maker_account(
        driver, seed_policy_maker, assertion=assertion)


@pytest.mark.usefixtures('delete_farmer_account')
def test_create_farmer_account(driver, p_farmer=None, assertion=SUCCESS):
    farmer = Farmer() if p_farmer is None else p_farmer

    open_registration_form(driver)
    fill_in_common_fields(driver, farmer)

    select_role(driver, farmer.role)
    fill_in_farmer_specific_fields(driver, farmer)

    notification = submit_form(driver)
    assert notification.text == assertion


def test_create_two_farmers_with_the_same_data_with_error(driver):
    test_create_farmer_account(driver, seed_farmer, FARM_ALREADY_CREATED)
