/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { VerificacionService } from '../../services/verificacion.service';
import { ExportExcelService } from '../../services/export-excel.service';
import Swal from 'sweetalert2';
import { log } from 'util';
import { SidebarService } from 'src/app/Services/SideBar/sidebar.service';



enum tipoFiltro{
  taller =1,
  fecha=2,
  mecanico=3
};


@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html',
  styleUrls: ['./verificacion.component.css']
})


export class VerificacionComponent implements OnInit {
 

  @ViewChild('map') mapElement: any;
  lat = 15.5001018;
  lng = -88.0269415;
  map: google.maps.Map;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 6
   };

   talleres: any = []
   marcadoresMapa: any = [] 
   talleresSeleccionados:any = [] 
   order_t:boolean =  true
   ordenamientoPorTaller =true
   ordenamientoPorFecha =true
   ordenamientoPorMecanico =true
   textBuscar:string 
   mostrarListaTalleresVerficados =false
   hayTalleresVerificados = false
   imagenes:any = []
   imagenMecanico:any 
   subEventCiudad:any
   ocultarTodo = true


  constructor(
    private sVerificacion:VerificacionService ,
    private sExcel:ExportExcelService,
    private sSideBar:SidebarService
  ) {

   }


  async ngAfterViewInit()  {
  await  this.construirControl()
  }


  async ngOnInit() {
    this.subEventCiudad = this.sSideBar.getCiudadId()
      .subscribe(async (item:any) => { 
        await this.obtenerListaTalleres(item)
      });
  }
  ngOnDestroy() {
    this.subEventCiudad.unsubscribe();
  }

   async construirControl(){

     await this.mapInitializer()
    }
    async mapInitializer() {
      this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);    
    }

  async dibujarCordenadas(){
    try {

      for (var i = 0; i < this.marcadoresMapa.length; i++) {
        this.marcadoresMapa[i].setMap(null);  
      } 
         this.marcadoresMapa = []
       
          this.talleres.forEach((taller:any) => {

                let cordenadas =  new google.maps.LatLng(taller.latitud, taller.longitud);
                var infowindow = new google.maps.InfoWindow({
                  content: "<span>"+taller.nombretaller+"</span>"
                  });
                  
                let  marcadores = new google.maps.Marker({
                    position: cordenadas,
                    title:  taller.nombretaller,
                    animation: google.maps.Animation.DROP,
                    
                  }); 

                  this.marcadoresMapa.push(marcadores)

                  google.maps.event.addListener(marcadores, 'click',  (funcClick:any)=> {
                    try {
                      this.agregarTallerSeleccionado(taller)       
 
                      // infowindow.close();
                      infowindow.open(this.map, marcadores);
                      marcadores.setValues(taller)
                      marcadores.setIcon( "http://maps.google.com/mapfiles/ms/icons/green-dot.png")
                      // marcadores.setMap(null);
                      //infowindow.open(this.map,marcadores);
                    } catch (error) {

                      console.log('error');
                      
                    }
                    

                  }); 

              
    });
    
 
    for (var i = 0; i < this.marcadoresMapa.length; i++) {
       this.marcadoresMapa[i].setMap(this.map);  
    } 
    } catch (error) {
      
    }

  }

  async changeColorMaker(pTaller){
    try {
   

                let cordenadas =  new google.maps.LatLng(pTaller.latitud, pTaller.longitud);
                var infowindow = new google.maps.InfoWindow({
                  content: "<span>"+pTaller.nombretaller+"</span>"
                  });

                let  marcadores = new google.maps.Marker({
                    position: cordenadas,
                    map: this.map,
                    title:  pTaller.nombretaller,
                    animation: google.maps.Animation.DROP,
                    
                  });
                      marcadores.setMap(null)
                      infowindow.close();
                      marcadores.setValues(pTaller)
                      marcadores.setMap(this.map)

                  this.marcadoresMapa.push(marcadores)

                  google.maps.event.addListener(marcadores, 'click',  (funcClick:any)=> {
                    try {
 
                      infowindow.close();
                      marcadores.setValues(pTaller)
                      marcadores.setMap(this.map)

                      marcadores.setIcon( "http://maps.google.com/mapfiles/ms/icons/green-dot.png")
                      this.agregarTallerSeleccionado(pTaller)
                      //infowindow.open(this.map,marcadores);
                    } catch (error) {

                      console.log('error');
                      
                    }
                    

                  }); 

 
    
 
    for (var i = 0; i < this.marcadoresMapa.length; i++) {
      this.marcadoresMapa[i].setMap(this.map);  
    } 

    } catch (error) {
      
    }

  }

agregarTallerSeleccionado(pTaller:any){

  let vContador = 0
  this.talleresSeleccionados.forEach((taller:any) => {
    if (taller.id_taller == pTaller.id_taller) {
      vContador +=1
    }
  });
  if (vContador == 0) {
    let vDatosTaller = pTaller
     
     
     
      vDatosTaller.fecha = pTaller.fecha,
      vDatosTaller.nombreMecanico ='No se registro',
      vDatosTaller.telefono ='--------------------',
      vDatosTaller.mecPro = pTaller.empleados[1].valor,
      vDatosTaller.mecApre =pTaller.empleados[2].valor,
      vDatosTaller.verificar =false,
      vDatosTaller.expandir = false
    

   try {
         pTaller.mecanicos.forEach((datosMecanico:any) => {
           vDatosTaller.nombreMecanico = datosMecanico.nombres +' '+ datosMecanico.apellido1 +' '+datosMecanico.apellido2
           vDatosTaller.telefono = datosMecanico.telefono_movil

           this.talleresSeleccionados.push(vDatosTaller)

    });

   } catch (error) {
     this.talleresSeleccionados.push(vDatosTaller)
     
   }
 

  }
}


  async obtenerListaTalleres(pCiudadId){
    this.ocultarTodo = false
    this.talleres = [] 
    this.talleresSeleccionados = []
    this.talleres = await  this.sVerificacion.getTalleres(pCiudadId)
    console.log('TALLERES ',this.talleres)
    await this.dibujarCordenadas() 
    // this.talleresSeleccionados = []
  }

  expandir(pTaller:any){
    pTaller.expandir = !pTaller.expandir
  }

 async verificar(pTaller:any){
    this.hayTalleresVerificados = false
    if (!pTaller.verificar) {
      if (await this.mostrarAlertaMotivo(pTaller)) {
        pTaller.verificar = !pTaller.verificar
      } 
    }else{
      pTaller.verificar = !pTaller.verificar
    }
    
    this.talleresSeleccionados.forEach((taller:any) => {
      if (taller.verificar) {
        this.hayTalleresVerificados = true
      }
    });


  }

  async mostrarAlertaMotivo(pTaller:any){
    let vResultado = false
   await Swal.fire({
      title: 'Ingrese un motivo de verificacion',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      showLoaderOnConfirm: true,
      preConfirm: async (dato) => {
         pTaller.motivoVerificacion = dato

      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then(async (result) => {
      if (result.value) { 
        vResultado = true
        Swal.fire({
          icon:'success',
          text:'El Taller se agrego para verificar '
        })
 
      }
    })

    return vResultado
  }


  async quitarTallerSeleccionado(pTaller:any){
  await  this.changeColorMaker(pTaller)
    this.talleresSeleccionados=this.talleresSeleccionados.filter(item=>item["tallerid"]!=pTaller.tallerid)
  }

  async order(pTipoFiltro:tipoFiltro) {
    this.order_t = !this.order_t
    if (pTipoFiltro == tipoFiltro.taller) {this.ordenamientoPorTaller=this.order_t }
    if (pTipoFiltro == tipoFiltro.fecha) { this.ordenamientoPorFecha=this.order_t}
    if (pTipoFiltro == tipoFiltro.mecanico) { this.ordenamientoPorMecanico=this.order_t}

    if (this.order_t) {
      this.talleresSeleccionados = await this.talleresSeleccionados.sort( (a, b)=> {
        //POR NOMBRE DE TALLER
        if (pTipoFiltro == tipoFiltro.taller) {  
          console.log();
          
                
          if (a.nombretaller > b.nombretaller) {
            return 1;
          }
          if (a.nombretaller < b.nombretaller) {
            return -1;
          }
          return 0;
        }
        //POR FECHA
        if (pTipoFiltro == tipoFiltro.fecha) {        
          if (a.fecha > b.fecha) {
            return 1;
          }
          if (a.fecha < b.fecha) {
            return -1;
          }
          return 0;
        }
        //POR NOMBRE DE MECANICO 
        if (pTipoFiltro == tipoFiltro.mecanico) {         
          if (a.nombreMecanico > b.nombreMecanico) {
            return 1;
          }
          if (a.nombreMecanico < b.nombreMecanico) {
            return -1;
          }
          return 0;
        }




      });
    } else {
      this.talleresSeleccionados = await this.talleresSeleccionados.sort( (a, b)=> {
        if (pTipoFiltro == tipoFiltro.fecha) {       
          if (b.fecha > a.fecha) {
            return 1;
          }
          if (b.fecha < a.fecha) {
            return -1;
          }
          return 0;
        }

        if (pTipoFiltro == tipoFiltro.taller) {          
          if (b.nombretaller > a.nombretaller) {
            return 1;
          }
          if (b.nombretaller < a.nombretaller) {
            return -1;
          }
          return 0;
        }

        if (pTipoFiltro == tipoFiltro.mecanico) {        
          if (b.nombreMecanico > a.nombreMecanico) {
            return 1;
          }
          if (b.nombreMecanico < a.nombreMecanico) {
            return -1;
          }
          return 0;
        }


      });
    } 
    
  }

  exportar(){
    let datosTabla:any = [];
    try {
      
      this.talleresSeleccionados.forEach( (taller:any) => {   
          let vDatos ={
            tallere:taller.nombretaller,
            registrado:taller.fecha,
            mecanico: taller.nombreMecanico,
            telefono: taller.telefono,
            profesionales:taller.mecPro,
            aprendices:taller.mecApre
          }
          datosTabla.push(vDatos)
      });
 
      this.sExcel.exportAsExcelFile( datosTabla , 'talleres')
    } catch (error) {
      console.error(error);
      
    }
    
  }

  async mandarActualizarTalleres(){ 
    let vTalleresActualizar:any = []
    let vDatos = {
      tallerid: 0,
      motivo:''
    }
    this.talleresSeleccionados.forEach((taller:any)=> {
      if (taller.verificar) {
      vDatos = {
          tallerid: taller.id_taller,
          motivo:taller.motivoVerificacion
        }
        vTalleresActualizar.push(vDatos)
      }
    });
    if (await this.sVerificacion.mandarActualizarTalleres(vTalleresActualizar)) {
      this.talleresSeleccionados = []
    await   this.construirControl()
    } 
    // console.log(JSON.stringify(vTalleresActualizar));
    
  }
  
}
