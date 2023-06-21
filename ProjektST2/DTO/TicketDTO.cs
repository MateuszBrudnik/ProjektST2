using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjektST2.DTO
{
	public class TicketDTO
	{

        [Required]
        [StringLength(15, ErrorMessage = "Wprowadzona rejestracja jest za długa")]
        public string Registration { get; set; }

        [Required]
        public DateTime EntryTime { get; set; }

        [Required]
        public bool IsPremium { get; set; }

        public float Payed { get; set; }

        public float ToPay { get; set; }

        public int ParkingTime { get; set; }

        public DateTime DepartureTime { get; set; }
    }
}

