// import { Controller, Get, Param, Res, Response } from '@nestjs/common';
import { Controller, Get, Param, StreamableFile, Response } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { FilesService } from './files.service';

@Controller('v1/files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @Get('get/:folderName/:fileName')
    getFile(
        @Param('folderName') folderName: string, 
        @Param('fileName') fileName: string,
        @Response({ passthrough: true }) res
    ): StreamableFile {
        res.set({
            'Content-Disposition': `attachment; filename="${fileName}"`,
        });
        return this.filesService.getFile(folderName, fileName)
    }
}
