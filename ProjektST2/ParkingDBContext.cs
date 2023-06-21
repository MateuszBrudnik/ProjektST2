using System;
using Microsoft.EntityFrameworkCore;
using ProjektST2.Entities;

namespace ProjektST2
{
	public class ParkingDBContext : DbContext
    {
        public ParkingDBContext(DbContextOptions<ParkingDBContext> options) : base(options) { }

        public DbSet<Ticket> Ticket { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}

// dotnet ef migrations add "init"
// dotnet ef database update