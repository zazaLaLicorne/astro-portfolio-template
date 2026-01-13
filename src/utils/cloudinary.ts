export function cldThumbnail(url, width = 720) {
  return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width},c_fill/`);
}