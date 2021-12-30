namespace SimpleFahrtenbuchBlazorServer.Data
{
    public class StuhlgangService
    {
        private List<Stuhlgang> Stuhlgangs = new List<Stuhlgang>()
        {
            new Stuhlgang {TimeStamp = DateTime.Now - TimeSpan.FromHours(2), BristolSkala = 3, Kommentar = "stabil"},
            new Stuhlgang {TimeStamp = DateTime.Now - TimeSpan.FromHours(1), BristolSkala = 7, Kommentar = "pisse aus dem Arsch"},
            new Stuhlgang {TimeStamp = DateTime.Now - TimeSpan.FromHours(-1), BristolSkala = 1, Kommentar = "future pflock"},
        };

        public IEnumerable<Stuhlgang> GetStuhlgangs() => Stuhlgangs;


        public void AddStuhlgang(Stuhlgang stuhlgang) => Stuhlgangs.Add(stuhlgang);
    }
}
