
import dynamic from 'next/dynamic'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Header from '../components/header';

const DynamicHeader = dynamic(() => import('../components/header'), {
  ssr: false,
})

export default function () {

  return (
    <DynamicHeader />
  );
}
