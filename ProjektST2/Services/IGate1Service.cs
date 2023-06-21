using System;
using ProjektST2.DTO;
using ProjektST2.Entities;

namespace ProjektST2.Services
{
	public interface IGate1Service
	{
		public Ticket GetTicket(string registration);
	}
}

