using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project_Part1_Server.Models;

namespace Project_Part1_Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightController : ControllerBase
    {
        private static readonly string[] Continents = new[]
        {
        "Asia", "Europe", "South America", "Australia", "Antarctica", "Africa"
        };
        private static readonly string[] Status = new[] { "Scheduled", "Cancelled", "Departed" };

        private readonly ILogger<FlightController> _logger;

        public FlightController(ILogger<FlightController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetFlightInformation")]
        public IEnumerable<FlightInformation> Get()
        {
            return Enumerable.Range(0, 6).Select(index => new FlightInformation
            {

                FlightRoute = "North America to " + Continents[index],
                FlightStatus = Status[Random.Shared.Next(Status.Length)]

            });
    }
    }
}
