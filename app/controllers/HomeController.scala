package controllers

import javax.inject._

import scalikejdbc._

import play.api.libs.json.Json
import play.api.mvc._



@Singleton
class HomeController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def appSummary = Action {
    Ok(Json.obj("content" -> "Scala Play React Seed"))
  }

  def appLegoList = Action {
    // initialize JDBC driver & connection pool
    Class.forName("com.mysql.jdbc.Driver")
    ConnectionPool.singleton("jdbc:mysql://localhost/legos?characterEncoding=UTF-8", "root", "")

    // ad-hoc session provider on the REPL
    implicit val session = AutoSession

    val count: Any = {
      sql"select count(*) from lego_kits;".map(_.toMap).single.apply()
    }
//    val count: Int = withSQL {
//      select
//        .from(lego_kits)
//    }.map(lego_kits()).list.apply()
    println("count: ", count)
    println("howdy");
    Ok(Json.obj(
      "content" -> Json.obj(
        "title" -> "Lego Summary",
        "list" -> Seq(Json.obj(
          "id" -> "31058",
          "name" -> "LEGO Creator Mighty Dinosaur",
          "completed" -> true
        ),Json.obj(
          "id" -> "31062",
          "name" -> "LEGO Creator Robo Explorer",
          "completed" -> true
        ))
      )
    ))
  }
}
