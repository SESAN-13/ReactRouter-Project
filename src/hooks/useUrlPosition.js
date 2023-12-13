import { useSearchParams } from "react-router-dom";

export default function useUrlPosition() {
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    console.log(setSearchParams);

  return [lat, lng]
}
