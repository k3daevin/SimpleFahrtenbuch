using System.Text.Json;
using System.Text.Json.Serialization;


namespace SimpleFahrtenbuch
{

    public class DateTimeConverter : JsonConverter<DateTime>
    {
        private const string DateTimeLocalFormat = "yyyy-MM-ddTHH:mm";
        private const string JavaScriptFormat = "yyyy-MM-ddTHH:mm:ss";
        private const string SwaggerFormat = "yyyy-MM-ddThh:mm:ss.fffZ";
        private static string[] ReadFormats = new [] { DateTimeLocalFormat, JavaScriptFormat, SwaggerFormat };

        public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            return DateTime.ParseExact(reader.GetString(), ReadFormats, null);
        }

        public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
        {
            writer.WriteStringValue(value.ToLocalTime().ToString(JavaScriptFormat));
        }
    }
}
