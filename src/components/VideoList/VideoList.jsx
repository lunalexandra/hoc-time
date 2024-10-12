import { Video } from "../Video/Video";
export function VideoList(props) {
    return props.list.map(item => <Video key={item.date} url={item.url} date={item.date} />);
}
