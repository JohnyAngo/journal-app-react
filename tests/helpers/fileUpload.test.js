import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
    cloud_name: 'dovxwom1x',
    api_key: '811146556589786',
    api_secret: 'tP62JFnFm-NsO2uILZ-Ynr4WANA',
    secure: true
});


describe('Pruebas en fileUpload', () => {

    test('debe de subir el archivo correctamente a cloudinary', async() => {

        const imageUrl = 'https://www.rdstation.com/blog/wp-content/uploads/sites/2/2017/09/thestocks.jpg';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload( file );
        expect( typeof url ).toBe('string');

        // console.log(url);
        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg','');
        
        const cloudResp = await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
           resource_type: 'image'
        });
        // console.log({ cloudResp })

    });

    test('debe de retornar null', async() => {

        const file = new File([], 'foto.jpg');
        const url = await fileUpload( file );
        expect( url ).toBe( null );
        
    });


    
});