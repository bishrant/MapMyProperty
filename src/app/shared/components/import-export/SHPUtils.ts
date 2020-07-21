// const parseSHPZip = (file: any) => {
//     this.zipService.getEntries(file).subscribe((entries: any) => {
//       const mmpAreaPolygons = entries.filter(
//         (e) => e.filename.toLowerCase().indexOf("shp_areas.zip") > -1
//       );
//       if (mmpAreaPolygons.length > 0) {
//         const createFile: ZipTask = this.zipService.getData(mmpAreaPolygons[0]);
//         createFile.data.subscribe((blob) => {
//           this.file = new File([blob], mmpAreaPolygons[0].filename, {
//             lastModified: Date.now(),
//           });
//           this.generateGraphicsFromSHP(this.file);
//         });
//       } else {
//         this.generateGraphicsFromSHP(this.file);
//       }
//     });
//   }

//   export {parseSHPZip}