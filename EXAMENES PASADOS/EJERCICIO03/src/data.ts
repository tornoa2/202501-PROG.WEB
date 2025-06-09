export interface Expositor {
  id: number
  nombre: string
  afiliacion: string
  pais: string
  url: string
}

export const listadoExpositores: Expositor[] = [ 
    {
        id: 1, 
        nombre: "Esteban Clua", 
        afiliacion: "Professor Of Computer Science At Universidade Federal Fluminense", 
        pais: "🇧🇷", 
        url: "https://ciis.ulima.edu.pe/wp-content/uploads/2024/03/Esteban-420x456.jpg"
    }, 
    { 
        id : 2, 
        nombre : "Victor M R Penichet", 
        afiliacion : "Full Professor At University Of Castilla-La Mancha", 
        pais : "🇪🇸", 
        url : "https://ciis.ulima.edu.pe/wp-content/uploads/2024/03/Victor-420x456.jpg" 
    }, 
    { 
        id : 3, 
        nombre : "Elvira G. Rincón-Flores", 
        afiliacion : "Research Professor At Tecnologico De Monterrey", 
        pais : "🇲🇽", 
        url : "https://ciis.ulima.edu.pe/wp-content/uploads/2024/03/Elvira-420x456.jpg" 
    }, 
    { 
        id : 4, 
        nombre : "Mariojulio Zaldivar", 
        afiliacion : "Professor At DigiPen", 
        pais : "🇺🇸", 
        url : "https://ciis.ulima.edu.pe/wp-content/uploads/2024/03/IMG_5291-e1711046902490-420x456.png" 
    }, 
    { 
        id : 5, 
        nombre : "Guillermo Rodríguez", 
        afiliacion : "Researcher At ISISTAN Research Institute - CONICET/UNICEN", 
        pais : "🇦🇷", 
        url : "https://ciis.ulima.edu.pe/wp-content/uploads/2024/03/guillermo-420x456.jpg" 
    } 
] 