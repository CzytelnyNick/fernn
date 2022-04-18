import { Injectable, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {
   
    getFile(locationName: string, folderName: string, fileName: string): StreamableFile {
        console.log("dsfsdfsdf");
        const file = createReadStream(join(process.cwd(), `./files/${locationName}/${folderName}/${fileName}`));

        return new StreamableFile(file);
    }
}
