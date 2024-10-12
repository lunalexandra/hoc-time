import { DateTime } from "../DateTime/DateTime";
import { DateTimePretty } from "../DateTimePretty/DateTimePretty";

export function Video(props) {
    // Получаем date из props
    const { url, date } = props;

    // Оборачиваем DateTime в DateTimePretty и передаем date
    const EnhancedDateTime = DateTimePretty(DateTime);
    
    return (
        <div className="video">
            <iframe 
                src={url} 
                //frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
            ></iframe>
            <EnhancedDateTime date={date} />
        </div>
    );
}
