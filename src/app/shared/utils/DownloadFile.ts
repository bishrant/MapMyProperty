const downloadFile = (name: any, contents: any, mime_type: string) => {
  mime_type = mime_type || 'text/plain';
  const blob = new Blob([contents], { type: mime_type });
  const dlink = document.createElement('a');
  dlink.download = name;
  dlink.href = window.URL.createObjectURL(blob);
  dlink.onclick = function () {
    // revokeObjectURL needs a delay to work properly
    setTimeout(function () {
      window.URL.revokeObjectURL(dlink.href);
    }, 100);
  };
  dlink.click();
  dlink.remove();
}

export { downloadFile }
