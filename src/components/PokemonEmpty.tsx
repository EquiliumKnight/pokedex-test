
import pokeball from './../assets/pokeball-logo.png'

export const PokemonEmpty = () => {
  return (
    <div className="flex flex-column w-full h-full align-items-center justify-content-center">
        <img src={pokeball} alt="pokeball" className='img-logo-rotate' />
        <p className='mt-5 text-center font-semibold' style={{ opacity: 0.7 }}>
            Select a pokemon to show information
        </p>
    </div>
  )
}
