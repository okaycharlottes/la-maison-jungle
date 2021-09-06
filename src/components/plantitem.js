
import CareScale from '../components/carescale'
import '../styles/plantitem.css'

function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item' onClick={() => handClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

function handClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`, plantName)
}

export default PlantItem