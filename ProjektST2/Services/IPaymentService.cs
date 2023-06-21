using System;
using ProjektST2.DTO;
using ProjektST2.Entities;

namespace ProjektST2.Services
{
	public interface IPaymentService
	{
        public TicketDTO Calculate(string registration);
        public string Pay(string registration, float amount);

    }
}

