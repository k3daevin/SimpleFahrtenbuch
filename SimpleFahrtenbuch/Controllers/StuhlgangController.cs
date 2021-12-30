using Microsoft.AspNetCore.Mvc;
using SimpleFahrtenbuch.Models;

namespace SimpleFahrtenbuch.Controllers
{
    //per Konvention heißt die Url für den Controller wie der Name des Controllers nur ohne "Controller"
    //hier also /Stuhlgang
    //wäre es der KnackwurstController dann hieße der Endpoint /Knackwurst

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


        //diese Methode wird bei einem GET-Request aufgerufen
        //der Name der Methode ist egal, wichtig ist das Attribug [HttpGet]
        [HttpGet]
        public IEnumerable<Stuhlgang> Lesen()
        {
            return Stuhlgangs;
        }

        //diese Methode wird bei einem POST-Request aufgerufen
        //der Name der Methode ist egal, wichtig ist das Attribut [HttpPost]
        //an die Daten "fetch(, {body: Daten})" kommt man über das Attribut [FromBody]
        [HttpPost]
        public void NeuerEintrag([FromBody]Stuhlgang stuhlgang)
        {
            Stuhlgangs.Add(stuhlgang);
        }
    }
}