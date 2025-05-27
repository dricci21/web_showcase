// QRCode.jsx
import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { ChromePicker } from 'react-color'; // for color wheel
import '../styles/QRCode.css';

const QRCodePage = () => {
  const [link, setLink] = useState('');
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');

  const downloadQRCode = () => {
    const svg = document.getElementById('qr-code');
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const svgBlob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'qr-code.svg';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="qr-page">
      <h1 className="qr-title">Generate QR Code!</h1>

      <input
        type="text"
        placeholder="Enter a link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="qr-input"
      />

      <div className="color-pickers">
        <div>
          <p>Foreground Color</p>
          <ChromePicker color={fgColor} onChange={(color) => setFgColor(color.hex)} />
        </div>
        <div>
          <p>Background Color</p>
          <ChromePicker color={bgColor} onChange={(color) => setBgColor(color.hex)} />
        </div>
      </div>

      {link && (
        <div className="qr-box">
          <QRCode
            id="qr-code"
            value={link}
            bgColor={bgColor}
            fgColor={fgColor}
            size={256}
          />
          <button className="qr-download" onClick={downloadQRCode}>Download QR Code</button>
        </div>
      )}
    </div>
  );
};

export default QRCodePage;
