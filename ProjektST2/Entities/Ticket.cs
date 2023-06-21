using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjektST2.Entities
{
    [Table("Ticket")]
	public class Ticket
	{
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(15)]
        public string Registration { get; set; }

        [Required]
        public DateTime EntryTime { get; set; }

        [Required]
        public bool IsPremium { get; set; }

        public float Payed { get; set; }

        public DateTime DepartureTime { get; set; }


        public int CalculateTime(DateTime entryTime)
        {
            var time = DateTime.Now - entryTime;
            int sum;
            sum = time.Days * 24 + time.Hours;
            if (time.Minutes > 10)
                sum++;
            return sum;
        }

        public float CalculateFee(bool premium, int time, float payed)
        {
            float fee;
            if (premium)
            {
                fee = time * 10 - payed;
            }
            else
            {
                fee = time * 5 - payed;
            }
            return fee;
        }
    }
}

