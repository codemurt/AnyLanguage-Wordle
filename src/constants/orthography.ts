import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'а',
  'б',
  'в',
  'г',
  'д',
  'е',
  'ё',
  'ж',
  'ӝ',
  'з',
  'ӟ',
  'и',
  'ӥ',
  'й',
  'к',
  'л',
  'м',
  'н',
  'о',
  'ӧ',
  'п',
  'р',   
  'с',   
  'т',    
  'у',    
  'ф',    
  'х',   
  'ц',
  'ч',   
  'ӵ',    
  'ш',    
  'щ',    
  'ъ',    
  'ы',  
  'ь',
  'э',   
  'ю',    
  'я',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
