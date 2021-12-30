namespace SimpleFahrtenbuch.Models
{
    //entspricht einem Stuhlgang
    //wird von der WebAPI automatisch von/nach JSON konvertiert
    public class Stuhlgang
    {
        public DateTime TimeStamp { get; set; }
        public int BristolSkala { get; set; }
        public string Kommentar { get; set; } = string.Empty;
    }
}
