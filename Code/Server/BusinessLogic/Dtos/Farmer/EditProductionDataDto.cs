﻿namespace BusinessLogic.Dtos.Farmer
{
    public class EditProductionDataDto
    {
        public int Id { get; set; }

        public float Amount { get; set; }

        public DateTime Date { get; set; }

        public string ProductionType { get; set; }
    }
}
