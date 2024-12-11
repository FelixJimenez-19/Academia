
const main = async () => {
  await entity.contacto.crud.select();
  // await entity.selects.empresa();
}
// MASTER OBJECT INI
const entity = {
  view: {
    table: document.getElementById("idea_table"),
    modalForm: document.getElementById("idea_modal_form"),
    form: document.getElementById("idea_form"),
    modalMessage: document.getElementById("idea_modal_message"),
    message: document.getElementById("idea_message"),
    modalConfirm: document.getElementById("idea_modal_confirm"),
    confirm: document.getElementById("idea_confirm"),
    search: document.getElementById("idea_search")
  },
  fun: {

    showModalForm: (index) => {
      entity.contacto.index = index;
      if (index !== null) {
        entity.view.form.contacto_id.value = entity.contacto.database[index].contacto_id;
        entity.view.form.contacto_nombre.value = entity.contacto.database[index].contacto_nombre;
        entity.view.form.contacto_email.value = entity.contacto.database[index].contacto_email;
        entity.view.form.contacto_descripcion.value = entity.contacto.database[index].contacto_descripcion;
        // entity.view.form.empresa_id.value = entity.contacto.database[index].empresa_id;
      }
      entity.view.modalForm.style.top = '0%';
    },


    hideModalForm: () => {
      entity.contacto.index = null;
      entity.view.form.contacto_id.value = "";
      entity.view.form.contacto_nombre.value = "";
      entity.view.form.contacto_email.value = "";
      entity.view.form.contacto_descripcion.value = "";
      // entity.view.form.empresa_id.value = "";
      entity.view.modalForm.style.top = '-100%';
    },

    showModalMessage: (msg) => {
      entity.view.modalMessage.style.top = '0%';
      entity.view.message.innerHTML = msg;
    },
    hideModalMessage: () => {
      entity.view.modalMessage.style.top = '-100%';
      entity.view.message.innerHTML = '';
    },
    showModalConfirm: (msg, action) => {
      entity.view.modalConfirm.style.top = '0%';
      entity.view.confirm.innerHTML = msg;
      action();
    },
    hideModalConfirm: () => {
      entity.contacto.index = null;
      entity.view.modalConfirm.style.top = '-100%';
      entity.view.confirm.innerHTML = '';
    },
    pressYesModalConfirm: (action) => {
      action();
      entity.fun.hideModalConfirm();
    },
    submitForm: (evt) => {
      evt.preventDefault();
    },

    getHtmlTr: (register, index) => {
      return `
    <tr>
    <td>${register.contacto_id}</td>
    <td>${register.contacto_nombre}</td>
    <td>${register.contacto_email}</td>
    <td>${register.contacto_descripcion}</td>
    <td>${register.empresa_nombre}</td>
    <td><button onclick="entity.fun.showModalForm(${index})"><img src="view/src/icon/view.png"></button></td>
    
    
    </tr>
    `;
    },
    // <button onclick="entity.fun.showModalForm(${ index })"><img src="view/src/icon/edit.png"></button>
    // <button onclick="entity.fun.showModalConfirm('¿Esta seguro de eliminar este registro?', () => entity.contacto.index = ${ index })">
    // <img src="view/src/icon/delete.png">
    // </button>

    search: (evt) => {
      let textSearch = evt.srcElement.value.toLowerCase();
      if (textSearch !== "") {
        let html = "";
        for (let i = 0; i < entity.contacto.database.length; i++) {
          if (
            textSearch === entity.contacto.database[i].contacto_id.substring(0, textSearch.length).toLowerCase() ||
            textSearch === entity.contacto.database[i].contacto_nombre.substring(0, textSearch.length).toLowerCase() ||
            textSearch === entity.contacto.database[i].contacto_email.substring(0, textSearch.length).toLowerCase() ||
            textSearch === entity.contacto.database[i].contacto_descripcion.substring(0, textSearch.length).toLowerCase() 
            // textSearch === entity.contacto.database[i].empresa_id.substring(0, textSearch.length).toLowerCase()
          ) {
            html += entity.fun.getHtmlTr(entity.contacto.database[i], i);
          }
        }
        entity.view.table.innerHTML = html;
      } else {
        entity.contacto.fun.select();
      }
    },

  },
  contacto: {
    database: [],
    index: null,
    fun: {

      select: () => {
        let html = "";
        for (let i = 0; i < entity.contacto.database.length; i++) {
          html += entity.fun.getHtmlTr(entity.contacto.database[i], i);
        }
        entity.view.table.innerHTML = html;
      },


      insertOrUpdate: () => {
        if (
          entity.view.form.contacto_nombre.value !== "" &&
          entity.view.form.contacto_email.value !== "" &&
          entity.view.form.contacto_descripcion.value !== ""
           &&
           entity.view.form.empresa_id.value !== ""
        ) {
          if (entity.contacto.index === null) {
            entity.contacto.crud.insert();
          } else {
            entity.contacto.crud.update();
          }
        } else {
          entity.fun.showModalMessage("Debe llenar todos los campos!");
        }
      },

    },
    crud: {
      select: async () => {
        await ContactoDao.select().then(res => {
          entity.contacto.database = res;
          entity.contacto.fun.select();
          entity.fun.hideModalForm();
        }).catch(res => {
          entity.fun.showModalMessage("Problemas al conectar con el servidor");
        });
      },
      insert: () => {
        ContactoDao.insert(new FormData(entity.view.form)).then(res => {
          entity.contacto.crud.select();
          entity.fun.hideModalForm();
        }).catch(res => {
          entity.fun.showModalMessage("Problemas al conectar con el servidor");
        });
      },
      update: () => {
        ContactoDao.update(new FormData(entity.view.form)).then(res => {
          entity.contacto.crud.select();
          entity.fun.hideModalForm();
        }).catch(res => {
          entity.fun.showModalMessage("Problemas al conectar con el servidor");
        });
      },
      delete: () => {
        let formData = new FormData();
        formData.append("contacto_id", entity.contacto.database[entity.contacto.index].contacto_id);
        ContactoDao.delete(formData).then(res => {
          entity.contacto.crud.select();
          entity.fun.hideModalForm();
        }).catch(res => {
          entity.fun.showModalMessage("Problemas al conectar con el servidor");
        });
      }
    }
  },

  selects: {

    empresa: async () => {
      await EmpresaDao.select().then(res => {
        let html = `<option value="">EMPRESA</option>`;
        for (let i = 0; i < res.length; i++) {
          html += `
    <option value="${res[i].empresa_id}">${res[i].empresa_id}</option>
    `;
        }
        entity.view.form.empresa_id.innerHTML = html;
      });
    }

  }

}
// EVENTS
entity.view.form.onsubmit = (evt) => entity.fun.submitForm(evt);
entity.view.search.onkeyup = (evt) => entity.fun.search(evt);
// MAIN CALL
main();

function validarEmail(valor) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)) {


    //  alert("La dirección de email " + valor + " es correcta.");
  } else {
    alert("La dirección de email no valida.");
  }
}