import { Injectable, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {
   
    getFile(folderName: string, fileName: string): StreamableFile {
        const file = createReadStream(join(process.cwd(), `./files/${folderName}/${fileName}`));

        return new StreamableFile(file);
    }
}
