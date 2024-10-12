export function DateTime(props) {
    return (
        <p className="date">{props.timeText || props.date}</p>
    );
}