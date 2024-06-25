import React from "react";
import { capitalizeText } from "../helpers/CapitalizeText";
import { usePokemon } from "../hooks/usePokemon";
import { Card } from "primereact/card";
import { Chip } from "primereact/chip";

interface PropPokemonDetail {
    name: string;
}

export const PokemonDetail: React.FC<PropPokemonDetail> = ({ name }) => {

    const { data } = usePokemon(name);

    return (
        <div className="m-3">
            <h2 className="">{ capitalizeText(name) }</h2>

            <div className="flex flex-row">
                <div className="flex flex-column">
                    <img className="img-pokemon mb-3" src={ data?.sprites.other?.dream_world.front_default } alt={ name } />

                    <div className="flex flex-row gap-1">
                        {
                            data?.types.map(t => (<Chip label={ t.type.name } />))
                        }
                    </div>
                </div>

                <Card className="w-full ml-3 shadow-3" title="Status">
                    <p>
                        {
                            data?.stats.map(s => (<p>
                                <b>{ s.stat.name }: </b> { s.base_stat }
                            </p>))
                        }
                    </p>
                </Card>

            </div>

            
        </div>
    )
}
