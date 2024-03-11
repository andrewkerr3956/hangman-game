export const Guide = ({ number, title, description }) => (
    <div className="htp-guide">
        <h2>{number}</h2>
        <h3 className="text-heading-md">{title}</h3>
        <p className="text-body">{description}</p>
    </div>
);