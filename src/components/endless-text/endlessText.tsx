import './endlessText.css';

interface endlessTextProps {
  messageLabel: string;
}

const EndlessText = ({messageLabel}: endlessTextProps) => {
  //TODO make more generic
  let labelMessage = [messageLabel.concat('. ').repeat(9)];
  let labelMessageClone = [...labelMessage];

  return (
    <>
      <div id='endless-text-wrapper'>
        <p className="endless-text-contents">
          <span className="endless-text">&nbsp;{labelMessage}</span>
          <span className="endless-text-clone">&nbsp;{labelMessageClone}</span>
        </p>
      </div>
    </>
  );
}

export default EndlessText;