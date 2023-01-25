import React, { Component } from 'react'

export default class Profile extends Component {
    state={
        fullname:"Ninho",
        bio:"Un rappeur en herbe dès l âge de 12 ans Ninho, de son vrai nom William Nzobazola, est né à Longjumeau dans l Essonne et a grandi à Nemours en Seine-et-Marne. Les parents du garçon sont d origine kino-congolaise (diaspora de la République démocratique du Congo) et il a deux grandes sœurs. Dès son enfance, Ninho est très attiré par l univers du rap. Il commence à écrire ses propres chansons et à les rapper à l âge de 12 ans. Je tentais de faire comme les grands de mon quartier qui rappaient eux aussi, explique-t-il au média Yard. Très vite, l adolescent montre un certain talent dans lart de déclamer des textes.  Maintenant ils le savent, la mixtape qui perce En 2013, Ninho crée ses propres mixtapes qui rassemblent ses meilleurs morceaux de rap. Jusqu en 2016, il en composera trois : Ils sont pas au courant Vol. 1, En attendant I.S.P.A.C. 2 (Ils sont pas au courant) un an plus tard puis I.S.P.A.C. 2 encore deux ans plus tard. En 2016, Ninho sort la mixtape qui le fera enfin connaître dans le milieu : M.I.L.S., acronyme de Maintenant ils le savent. L impact est énorme sur la communauté du rap français et le disque devient rapidement disque de platine. C est le début d une carrière florissante pour Ninho.Comme prévu, premier album de Ninho",
        img:"https://img.nrj.fr/sQtGCnIc4NoMKkv3x3qm29HwDS0=/996x374/smart/medias%2F2022%2F10%2F63401863de470_6340186f0fdbb.jpg"

    }
    render() {
        return (
            <div>
                <h1>{this.state.fullname}</h1>
                <img src={this.state.img} alt=""/>
                <p>{this.state.bio}</p>

            </div>
        )
    }
}
