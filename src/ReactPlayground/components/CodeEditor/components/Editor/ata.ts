import {setupTypeAcquisition} from '@typescript/ata'
import typescriprt from 'typescript';

export function createATA(onDownloadFile: (code: string, path: string) => void) {
    return setupTypeAcquisition({
        projectName: 'my-ata',
        typescript: typescriprt,
        logger: console,
        delegate: {
            receivedFile: (code, path) => {
                onDownloadFile(code, path);
            }
        },
    });
}
