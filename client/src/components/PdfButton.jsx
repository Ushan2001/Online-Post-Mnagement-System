import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PdfButton = ({ post }) => {
  const downloadPdf = () => {
    const docDefinition = {
      content: [
        { text: 'Post Details', style: 'header' },
        { text: '\n' }, // Add some space
        {
          table: {
            headerRows: 1,
            widths: ['auto', 'auto', 'auto'],
            body: [
              ['Topic', 'Description', 'Post Category'],
              [post.topic, post.description, post.postCategory],
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
      },
    };

    pdfMake.createPdf(docDefinition).download(`Post_${post._id}.pdf`);
  };

  return (
      <button className='btn btn-primary' onClick={downloadPdf}>
        <i className='fas fa-download'></i>&nbsp;PDF
      </button>
  );
};

export default PdfButton;
