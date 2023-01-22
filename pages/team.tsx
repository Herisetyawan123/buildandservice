import type { NextPage } from "next";
import CardTeam from "../components/Element/Card/CardTeam";
import LayoutApp from "../layouts/Frontend";
import Heri from "../assets/profile/heri.jpg";
import Perdana from "../assets/profile/perdana.jpeg";
import Abstrak from "../assets/bg/abstrak.svg"

const Team: NextPage = () => {
    return (
        <>
            <LayoutApp>
                <section className="w-full"  style={{ backgroundImage: `url(${Abstrak.src})` }}>
                    <div className='max-w-6xl mx-auto py-10'>
                        <div>
                            <h3 className="font-bold text-green-500 text-3xl">Our Teams</h3>
                            <h1 className='text-gray-500 mt-2 '>In Developing this platform, we need a team to help some issue and fixing it.</h1>
                        </div>
                        <div className="mt-10 flex sm:gap-x-10 flex-col sm:flex-row gap-y-10 items-center">
                            <CardTeam image={Heri} name="Heri Setyawan" description="i'am a fullstack developer in website and mobile flutter developer." instagram={"https://instagram.com/herisetyawan233"} github={"https://github.com/herisetyawan123"} linkedin={"https://www.linkedin.com/in/heri-setyawan-905758202/"}/>
                            <CardTeam image={Perdana} name="Perdana Putro" description="i'am a Backend Developer and mobile flutter developer." instagram={"https://instagram.com/perdanaph"} github={"https://github.com/perdanaph"} linkedin={"https://www.linkedin.com/in/heri-setyawan-905758202/"}/>
                        </div>
                    </div>
                </section>
            </LayoutApp>
        </>
    )
}

export default Team;