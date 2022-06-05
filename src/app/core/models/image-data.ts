export interface ImageFile {
  _id: string;
  filename: string;
  chunkSize: number;
  contentType: string;
  length: number;
  md5: string;
  uploadDate: string;
}

export interface ImageChunk {
  _id: string;
  files_id: string;
  data: string;
  n: number;
}

export interface ImageData {
  file: ImageFile;
  chunks: ImageChunk[];
}
