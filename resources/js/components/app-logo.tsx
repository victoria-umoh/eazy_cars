export default function AppLogo() {
    return (
        <>
            <img
                src="/images/logo.png"
                alt="Eazy's Cars"
                className="size-8 rounded-full object-cover shadow-sm ring-1 ring-[#d8ad55]/50"
            />
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    EAZY CARS
                </span>
            </div>
        </>
    );
}
