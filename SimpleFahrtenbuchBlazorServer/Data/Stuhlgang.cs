namespace SimpleFahrtenbuchBlazorServer.Data
{
    public class Stuhlgang
    {
        public DateTime TimeStamp { get; set; }
        public int BristolSkala { get; set; }
        public string Kommentar { get; set; } = string.Empty;
    }
}
