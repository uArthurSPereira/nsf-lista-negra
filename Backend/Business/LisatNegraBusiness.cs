using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Backend.Business
{
    public class LisatNegraBusiness
    {
        DataBase.ListaNegraDataBase db = new DataBase.ListaNegraDataBase();

        public Models.TbListaNegra Salvar(Models.TbListaNegra ln)
        {
            if (ln.NmPessoa == string.Empty)
                throw new Exception("Nome é obrigatório");
            if (ln.DsMotivo == string.Empty)
                throw new Exception("Motivo é obrigatório");

            return db.Salvar(ln);
        }   

        public List<Models.TbListaNegra> Listar()
        {
           return db.Listar();
        }
    }
}