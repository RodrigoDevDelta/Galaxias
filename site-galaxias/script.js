document.addEventListener('DOMContentLoaded', function () {
    const galaxies = [
        {
            id: 'andromeda',
            name: 'Galáxia de Andrômeda (M31)',
            imageUrl: 'imagens/andromeda.jpeg',
            curiosities: 'É a galáxia espiral mais próxima da Via Láctea e está em rota de colisão conosco, um evento que acontecerá em cerca de 4,5 bilhões de anos. Contém cerca de um trilhão de estrelas, muito mais que a nossa galáxia.',
            scientist: 'Edwin Hubble foi fundamental para entender que Andrômeda era uma galáxia separada e não uma nebulosa dentro da Via Láctea.'
        },
        {
            id: 'sombrero',
            name: 'Galáxia do Sombrero (M104)',
            imageUrl: 'imagens/sombrero.jpeg',
            curiosities: 'Possui um núcleo brilhante, um bulbo central excepcionalmente grande e um proeminente anel de poeira em seu disco, o que lhe confere uma aparência de chapéu mexicano. Acredita-se que abrigue um buraco negro supermassivo em seu centro.',
            scientist: 'Descoberta por Pierre Méchain em 1781, foi posteriormente observada por Charles Messier e William Herschel, que notou o anel de poeira.'
        },
        {
            id: 'whirlpool',
            name: 'Galáxia do Redemoinho (M51)',
            imageUrl: 'imagens/redemoinho.jpg',
            curiosities: 'É uma das galáxias espirais mais famosas, conhecida por seus braços espirais bem definidos. Sua estrutura proeminente é em parte devido à interação gravitacional com sua galáxia companheira, a NGC 5195.',
            scientist: 'Observada pela primeira vez por Charles Messier em 1773, foi Lord Rosse em 1845 quem primeiro identificou sua natureza espiral com seu grande telescópio.'
        },
        {
            id: 'pinwheel',
            name: 'Galáxia do Cata-vento (M101)',
            imageUrl: 'imagens/cata-vento.jpg',
            curiosities: 'É uma grande galáxia espiral com cerca de 70% a mais de diâmetro que a Via Láctea. Seus braços espirais são repletos de regiões de formação de estrelas, ricas em estrelas jovens e quentes.',
            scientist: 'Descoberta por Pierre Méchain em 1781, foi adicionada ao catálogo de Charles Messier. Halton Arp a incluiu em seu Atlas de Galáxias Peculiares devido aos seus braços espirais assimétricos.'
        },
        {
            id: 'blackeye',
            name: 'Galáxia Olho Negro (M64)',
            imageUrl: 'imagens/olho-negro.jpeg',
            curiosities: 'É famosa por uma espetacular faixa escura de poeira absorvente em frente ao seu núcleo brilhante, dando-lhe a aparência de um olho. Uma característica intrigante é que o gás na região externa da galáxia gira na direção oposta ao gás e às estrelas na região interna.',
            scientist: 'Descoberta por Edward Pigott em março de 1779 e, independentemente, por Johann Elert Bode em abril do mesmo ano. Charles Messier também a catalogou em 1780.'
        }
    ];

    const gallery = document.getElementById('galaxy-gallery');

    galaxies.forEach(galaxy => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        item.setAttribute('data-id', galaxy.id);

        const img = document.createElement('img');
        img.src = galaxy.imageUrl;
        img.alt = galaxy.name;

        const p = document.createElement('p');
        p.textContent = galaxy.name;

        item.appendChild(img);
        item.appendChild(p);

        item.addEventListener('click', () => {
            const newTab = window.open();
            newTab.document.write(`
                <!DOCTYPE html>
                <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <title>${galaxy.name}</title>
                    <style>
                        body { font-family: sans-serif; padding: 20px; text-align: center; background-color: #f0f2f5;}
                        img { max-width: 80%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
                        .content { max-width: 800px; margin: 20px auto; text-align: left; background-color: #fff; padding: 20px; border-radius: 8px;}
                        .back-button {
                            padding: 10px 20px;
                            font-size: 16px;
                            cursor: pointer;
                            background-color: #333;
                            color: white;
                            border: none;
                            border-radius: 5px;
                            margin-top: 30px;
                            transition: background-color 0.3s;
                        }
                        .back-button:hover {
                            background-color: #555;
                        }
                    </style>
                </head>
                <body>
                    <h1>${galaxy.name}</h1>
                    <img src="${galaxy.imageUrl}" alt="${galaxy.name}">
                    <div class="content">
                        <h2>Curiosidades</h2>
                        <p>${galaxy.curiosities}</p>
                        <h2>Cientista Associado</h2>
                        <p>${galaxy.scientist}</p>
                    </div>
                    
                    <button class="back-button" onclick="window.close()">Voltar para a Galeria</button>
                    
                </body>
                </html>
            `);
        });

        gallery.appendChild(item);
    });
});