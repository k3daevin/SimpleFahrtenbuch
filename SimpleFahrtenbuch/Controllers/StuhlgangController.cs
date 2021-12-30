using Microsoft.AspNetCore.Mvc;
using SimpleFahrtenbuch.Models;

namespace SimpleFahrtenbuch.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StuhlgangController : ControllerBase
    {

        private static List<Stuhlgang> Stuhlgangs = new List<Stuhlgang>()
        {
            new Stuhlgang {TimeStamp = DateTime.Now - TimeSpan.FromHours(2), BristolSkala = 3, Kommentar = "stabil"},
            new Stuhlgang {TimeStamp = DateTime.Now - TimeSpan.FromHours(1), BristolSkala = 7, Kommentar = "pisse aus dem Arsch"},
            new Stuhlgang {TimeStamp = DateTime.Now - TimeSpan.FromHours(-1), BristolSkala = 1, Kommentar = "future pflock"},
        };

        private readonly ILogger<StuhlgangController> _logger;

        public StuhlgangController(ILogger<StuhlgangController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Stuhlgang> Get()
        {
            return Stuhlgangs;
        }

        [HttpPost]
        public void Post([FromBody]Stuhlgang stuhlgang)
        {
            Stuhlgangs.Add(stuhlgang);
        }
    }
}