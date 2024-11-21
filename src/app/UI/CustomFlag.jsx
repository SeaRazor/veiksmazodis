export function CustomFlag({country}) {

    return (
        <img src={`/flags/${country}.png`} width={18} height={18} alt={country}/>
    );
}