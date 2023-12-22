namespace SingleWindowSystem.Models
{
    public class DocumentViewModel
    {
        public int DocumentType { get; set; }
        public IEnumerable<IFormFile>? DocumentFile { get; set; }

    }
}
