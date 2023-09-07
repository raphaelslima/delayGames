type LabelProps = {
    item: string
}

const Label = ({item}: LabelProps) => {
    return (
        <div className="bg-slate-300 p-4 rounded-lg hover:font-bold transition-all duration-200 flex-grow text-center sm:flex-grow-0">
            {item}
        </div>
    )
}

export default Label