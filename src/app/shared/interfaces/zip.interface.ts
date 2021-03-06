import { Observable } from 'rxjs';

export interface ZipEntry {
  version: number;
  bitFlag: number;
  compressionMethod: number;
  lastModDateRaw: number;
  lastModDate: string;
  crc32: number;
  compressedSize: number;
  uncompressedSize: number;
  filenameLength: number;
  extraFieldLength: number;
  commentLength: number;
  directory: boolean;
  offset: 0;
  filename: string;
  comment: string;
}

export interface ZipTaskProgress {
  active: boolean;
  current?: number;
  total?: number;
}
// import { ZipTaskProgress } from "./zip-task-progress.interface";

export interface ZipTask {
  progress: Observable<ZipTaskProgress>;
  data: Observable<Blob>;
}
