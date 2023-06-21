using System;
using ProjektST2.DTO;
using ProjektST2.Entities;

namespace ProjektST2.Services
{
	public interface IAdminService
	{
		public List<TicketDTO> GetTickets();
		public string LetOut(string Registration);
		public void Update(Ticket ticket);
	}
}

