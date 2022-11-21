import type { NextPage } from "next";
import CardTeam from "../components/Element/Card/CardTeam";
import LayoutApp from "../layouts/Frontend";
import Heri from "../assets/profile/heri.jpg"

const Team: NextPage = () => {
    return (
        <>
            <LayoutApp>
                <div className='max-w-6xl mx-auto py-10'>
                    <div>
                        <h3 className="font-bold text-green-500 text-3xl">Our Teams</h3>
                        <h1 className='text-gray-500 mt-2 '>In Developing this platform, we need a team to help some issue and fixing it.</h1>
                    </div>
                    <div className="mt-5 flex gap-x-10">
                        <CardTeam image={Heri} name="Heri Setyawan" description="i'am a fullstack developer in website and mobile flutter developer."/>
                        {/* <CardTeam name="Perdana Putro" description="i'am a fullstack developer in website and mobile flutter developer."/> */}
                    </div>
                </div>
            </LayoutApp>
        </>
    )
}

export default Team;