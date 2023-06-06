import { Button } from "./Button"

export const Header = () => {
    return (
        <>
            <img className="w-full h-44 md:h-64 object-cover" src="img/image.jpg" alt="Fundo perfil" />
            <div className="px-3">
                <div className="container flex flex-col md:flex-row md:justify-between items-center md:items-start bg-white relative -top-5 md:-top-16 rounded-lg mx-auto pb-6 pl-6 pr-6 md:min-h-[164px]">
                    <img className="w-28 h-28 md:w-36 md:h-36 rounded-lg object-cover border-4 border-white absolute -top-20 md:-top-8" src="img/avatar.jpg" alt="Avatar" />
                    <div className="mt-11 md:mt-3 md:ml-40">
                        <div className="flex flex-col md:flex-row md:gap-6 items-center">
                            <h1 className="font-poppins text-2xl font-semibold  text-dark-gray-blue text-center">Léo Pelé</h1>
                            <div className="font-poppins flex text-xs font-semibold text-medium-gray gap-2 md:gap-4 mt-1">
                                <div><span className="text-dark-gray-blue font-bold">2,564 </span>Following</div>
                                <div><span className="text-dark-gray-blue font-bold">10k </span>Followers</div>
                            </div>
                        </div>
                        <p className="text-center font-noto font-medium text-lg text-medium-gray mt-3">Zagueiro do Club de Regatas Vasco da Gama</p>
                    </div>
                    <div className="mt-6">
                        <Button text="Follow" userIcon={true} />
                    </div>
                </div>
            </div>
        </>
    )
}