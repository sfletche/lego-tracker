package controllers

import javax.inject._

import play.api.libs.json.Json
import play.api.mvc._


@Singleton
class HomeController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  def appSummary = Action {
    Ok(Json.obj("content" -> "Scala Play React Seed"))
  }

  def appLegoList = Action {
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
